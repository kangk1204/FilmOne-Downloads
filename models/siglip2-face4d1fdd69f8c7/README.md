# SigLIP2 FP32 scene assets

Derived from [Google SigLIP2](https://huggingface.co/google/siglip2-base-patch16-224/tree/75de2d55ec2d0b4efc50b3e9ad70dba96a7b2fa2) under Apache-2.0. See LICENSE and NOTICE.

This is a portable ORT serialization for FilmOne 0.6.6. No quantization is used. The original ONNX asset directory remains available for earlier releases. All chunks are required and the app verifies the complete model before inference.

- File: `siglip2-scene.ort`
- Bytes: 369,546,304
- SHA-256: `face4d1fdd69f8c71ab769c551680249cdc6dd012358832fc3ab1bf360766056`
- Chunks: 18, each at most 20 MiB
- Classification agreement on 320 frozen regression photos: 100%; this is preservation evidence, not independent scene accuracy.
