# FilmOne for Android

English · [한국어](README.ko.md)

Choose one photo or a folder. FilmOne recognizes each photo's scene, chooses a film-inspired look, reduces noise when needed, and saves a new JPEG copy. Photos are processed on your device.

**[Download page](https://kangk1204.github.io/FilmOne-Downloads/)** · **[Download 0.5.2 APK](https://github.com/kangk1204/FilmOne-Downloads/releases/download/v0.5.2/FilmOne-0.5.2-preview.apk)** · [Release notes](https://github.com/kangk1204/FilmOne-Downloads/releases/tag/v0.5.2)

No GitHub login is required. This repository contains downloads and documentation; the application source remains private.

<img src="assets/FilmOne-0.5.2-download-qr.png" width="280" height="280" alt="Scan to download FilmOne 0.5.2 APK">

[Save QR code](https://github.com/kangk1204/FilmOne-Downloads/releases/download/v0.5.2/FilmOne-0.5.2-download-qr.png) · [English page](https://kangk1204.github.io/FilmOne-Downloads/?lang=en) · [한국어 페이지](https://kangk1204.github.io/FilmOne-Downloads/?lang=ko)

## Model cache repair in 0.5.2

Downloaded web models now use IndexedDB to survive the reproduced memory-pressure loss in Chromium private contexts. Existing cache entries migrate without redownloading. Failed transactions retain the old copy; corruption invalidates only the affected model. The APK includes the updated shared editor and all offline model assets. Clearing browser data or closing a private session still removes stored data.

## Reliability fixes in 0.5.1

Fixed duplicate-name recovery, failed native folder selection, retry/cancellation races, corrupt model-cache recovery, ZIP cancellation, scene-worker failure recovery and preview bitmap cleanup. Ambiguous duplicate files from older unfinished jobs are rejected instead of being assigned to the wrong original.

## Install and use

1. Download the **591 MB** APK on an **ARM64 Android 7+** phone and open it. Allow browser installation if Android asks.
2. Choose **폴더 자동 보정** (Folder Auto), then **폴더 선택** (Choose folder). Subfolders are included.
3. Start automatic processing and keep the app open. It pauses when backgrounded; resume from the saved job if needed.
4. Results go to `FilmOne/<job-id>/` inside the selected folder, preserving subfolders. Originals and existing results are kept. Compare a result or choose another film to create a new version.

Single-photo editing, album saving, favorite films, personal looks and export sizes remain available. JPEG/PNG/WebP are supported; the native app also normalizes HEIC. Maximum input: 24 MP, 40 MB, 16,384px long edge. RAW, video, continuous folder watching and screen-off processing are not included.

Package `app.filmone.editor` · version **0.5.2** · version code **7**. The interface is **Korean**; the website language switch changes documentation. The APK contains SigLIP2 FP32, YOLOX-Nano, NAFNet-32 and SCUNet for offline processing. Its size increased because the smaller scene model failed the quality-preservation comparison.

## Preview status

This APK uses the same test signing certificate as previous FilmOne previews. It is not a store release. A 100-photo browser batch, original preservation, pause/restart, output verification, ZIP fallback and native bridge contracts were tested. No physical Android/iPhone execution or phone speed/memory benchmark was available. Independent scene-quality targets have not been established; automatic choices can be changed per photo.

## Verify

The APK is **590,728,246 bytes**. [Download checksum](https://github.com/kangk1204/FilmOne-Downloads/releases/download/v0.5.2/FilmOne-0.5.2-preview.apk.sha256).

```text
28a0fb00b0b15b878ac31eafdedfb217fde60929a6f611415583ad278864a9ec  FilmOne-0.5.2-preview.apk
```

[0.4.0 archive and QR](https://kangk1204.github.io/FilmOne-Downloads/0.4.0/) · [0.3.0 archive and QR](https://kangk1204.github.io/FilmOne-Downloads/0.3.0/)

## Web model assets

This repository also serves the pinned, Apache-2.0 [SigLIP2 scene-model pieces](models/siglip2-c9e561942b1e1065/) used by the FilmOne web app. They total about 372MB and make a full Git clone larger. Browser inference stays on your device; this repository never receives your photos. The Android APK already includes the model and does not need these separate downloads.
