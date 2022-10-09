"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEED = exports.DEFAULT_MASK = exports.DEFAULT_ALGORITHM_VERSION = exports.DEFAULT_CROP_EDGE_PIXELS = exports.DEFAULT_EXHAUST_PIXELS = exports.DEFAULT_FAKE_MASK_PIXELS = exports.MAX_TOLERANCE = exports.DEFAULT_TOLERANCE = exports.TOLERANCE_NOT_SET = exports.DEFAULT_SIZE = exports.DEFAULT_PARAM_COPIES = exports.DEFAULT_COPIES = exports.DEFAULT_NARROW = exports.MAX_WIDTH = exports.CLI_NAME = void 0;
const transform_1 = require("./utils/transform");
const stego_params_1 = require("./utils/stego-params");
exports.CLI_NAME = 'stego-js';
exports.MAX_WIDTH = 1960;
exports.DEFAULT_NARROW = 0;
exports.DEFAULT_COPIES = 3;
exports.DEFAULT_PARAM_COPIES = 9;
exports.DEFAULT_SIZE = 8;
exports.TOLERANCE_NOT_SET = -1;
exports.DEFAULT_TOLERANCE = {
    [stego_params_1.AlgorithmVersion.V1]: {
        [transform_1.TransformAlgorithm.DCT]: 100,
        [transform_1.TransformAlgorithm.FastDCT]: 500,
        [transform_1.TransformAlgorithm.FFT1D]: 128,
        [transform_1.TransformAlgorithm.FFT2D]: 500,
    },
    [stego_params_1.AlgorithmVersion.V2]: {
        [transform_1.TransformAlgorithm.DCT]: 10,
        [transform_1.TransformAlgorithm.FastDCT]: 100,
        [transform_1.TransformAlgorithm.FFT1D]: 30,
        [transform_1.TransformAlgorithm.FFT2D]: 150,
    },
};
exports.MAX_TOLERANCE = {
    [transform_1.TransformAlgorithm.DCT]: 5000,
    [transform_1.TransformAlgorithm.FastDCT]: 5000,
    [transform_1.TransformAlgorithm.FFT1D]: 5000,
    [transform_1.TransformAlgorithm.FFT2D]: 50000,
};
exports.DEFAULT_FAKE_MASK_PIXELS = false;
exports.DEFAULT_EXHAUST_PIXELS = true;
exports.DEFAULT_CROP_EDGE_PIXELS = true;
exports.DEFAULT_ALGORITHM_VERSION = stego_params_1.AlgorithmVersion.V2;
exports.DEFAULT_MASK = [
    0x89, 0x50, 0x4e, 0x47, 0xd, 0xa, 0x1a, 0xa, 0x0, 0x0, 0x0, 0xd, 0x49, 0x48, 0x44, 0x52, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0,
    0x0, 0x1, 0x1, 0x3, 0x0, 0x0, 0x0, 0x25, 0xdb, 0x56, 0xca, 0x0, 0x0, 0x0, 0x1, 0x73, 0x52, 0x47, 0x42, 0x1, 0xd9,
    0xc9, 0x2c, 0x7f, 0x0, 0x0, 0x0, 0x9, 0x70, 0x48, 0x59, 0x73, 0x0, 0x0, 0xb, 0x13, 0x0, 0x0, 0xb, 0x13, 0x1, 0x0,
    0x9a, 0x9c, 0x18, 0x0, 0x0, 0x0, 0x3, 0x50, 0x4c, 0x54, 0x45, 0xff, 0xff, 0xff, 0xa7, 0xc4, 0x1b, 0xc8, 0x0, 0x0, 0x0,
    0xa, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x63, 0x60, 0x0, 0x0, 0x0, 0x2, 0x0, 0x1, 0x48, 0xaf, 0xa4, 0x71, 0x0, 0x0,
    0x0, 0x0, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
];
exports.SEED = [
    76221, 13388, 20800, 80672, 15974, 87005, 71203, 84444, 16928, 51335, 94092, 83586, 37656, 2240, 26283, 1887, 93419,
    96857, 20866, 21797, 42065, 39781, 50192, 24399, 98969, 54274, 38815, 45159, 36824,
];
//# sourceMappingURL=constant.js.map