#!/usr/bin/env node
import meow from 'meow';
import { createReadStream } from 'fs';
import { rs2Buf } from '../utils/helper';
import { encode, decode } from '../node';
import {
  CLI_NAME,
  DEFAULT_COPIES,
  DEFAULT_TOLERANCE,
  DEFAULT_SIZE,
  DEFAULT_CROP_EDGE_PIXELS,
  DEFAULT_MASK,
  DEFAULT_EXHAUST_PIXELS,
  DEFAULT_FAKE_MASK_PIXELS,
} from '../constant';
import { normalizeFlags, validateFlags, flags2Options, flags } from './flag';
export const version = process.env.npm_package_version;

const cli = meow(
  `Usage
  $ cat <input> | ${CLI_NAME} [options...] > <output>

Options
  -h, --help             Print help message.
  -v, --version          Print version message.
  
  -e, --encode           Encode message into given image.
  -d, --decode           Decode message from given image.

  -m, --message          Specify the message to be encoded.
  -p, --pass             Specify the seed text for generating random encoding position when using 'FFT1D'.
  -t, --tolerance        Specify the number to be added into wave amplitude: ${DEFAULT_TOLERANCE.FFT1D} (default for FFT1D), ${DEFAULT_TOLERANCE.FFT2D} (default for FFT2D), ${DEFAULT_TOLERANCE.DCT} (default for DCT).
  -s, --size             Size of encoding block with radix-2 required: ${DEFAULT_SIZE} (default).
  -c, --copies           Size of duplications with odd numbers required: ${DEFAULT_COPIES} (default).
  -g, --grayscale        Specify grayscale algorithm: 'NONE' (default), 'AVG', 'LUMA', 'LUMA_II', 'DESATURATION', 'MAX_DE', 'MIN_DE', 'MID_DE', 'R', 'G', 'B'.
  -f, --transform        Specify transform algorithm: 'FFT1D' (default), 'FFT2D', 'DCT'.
      --exhaustPixels    Encode pixels in rest of image (default is ${DEFAULT_EXHAUST_PIXELS}).
      --fakeMaskPixels   Encode fake pixels into mask area (default is ${DEFAULT_FAKE_MASK_PIXELS})
      --cropEdgePixels   Crop edge pixels (default is ${DEFAULT_CROP_EDGE_PIXELS}).
      --algorithmVersion Customized algorithm version, eg. 0.11.x (default is ${String(version).replace(/[0-9]+$/,'x')})

Examples
  $ cat ./input.png | ${CLI_NAME} -e -m 'hello world' > output.png
  $ cat ./output.png | ${CLI_NAME} -d
`,
  {
    flags,
    inferType: true,
  }
);


export async function run() {
  const flags = normalizeFlags(cli.flags);

  if (flags.help || (!flags.encode && !flags.decode)) {
    process.stdout.write(`${cli.help}\n`);
    process.exit(0);
  } else if (flags.version) {
    process.stdout.write(`${version}\n`);
    process.exit(0);
  }

  const errMsg = validateFlags(flags);

  if (errMsg) {
    process.stderr.write(`${errMsg}\n`);
    process.exit(1);
  }

  const options = flags2Options(flags);
  const imgBuf =
    flags.encode || flags.decode ? await rs2Buf(process.stdin) : null;
  const maskBuf = flags.mask
    ? await rs2Buf(createReadStream(flags.mask))
    : Buffer.from(DEFAULT_MASK);

  if (flags.encode && imgBuf) {
    process.stdout.write(await encode(imgBuf, maskBuf, options));
  } else if (flags.decode && imgBuf) {
    process.stdout.write(await decode(imgBuf, maskBuf, options));
  }
}

if (require.main?.filename === __dirname) {
  run();
}