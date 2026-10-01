function SpinningIcon(playing = true) {
    const spinningIconFrames = [ //15 Frames
        "src/assets/images/FramesSpinningIcon/frame_00_delay-0.05s.png", //0
        "src/assets/images/FramesSpinningIcon/frame_01_delay-0.05s.png", //1
        "src/assets/images/FramesSpinningIcon/frame_02_delay-0.05s.png", //2
        "src/assets/images/FramesSpinningIcon/frame_03_delay-0.05s.png", //3
        "src/assets/images/FramesSpinningIcon/frame_04_delay-0.05s.png", //4
        "src/assets/images/FramesSpinningIcon/frame_05_delay-0.05s.png", //5
        "src/assets/images/FramesSpinningIcon/frame_06_delay-0.05s.png", //6
        "src/assets/images/FramesSpinningIcon/frame_07_delay-0.05s.png", //7
        "src/assets/images/FramesSpinningIcon/frame_08_delay-0.05s.png", //8
        "src/assets/images/FramesSpinningIcon/frame_09_delay-0.05s.png", //9
        "src/assets/images/FramesSpinningIcon/frame_10_delay-0.05s.png", //10
        "src/assets/images/FramesSpinningIcon/frame_11_delay-0.05s.png", //11
        "src/assets/images/FramesSpinningIcon/frame_12_delay-0.05s.png", //12
        "src/assets/images/FramesSpinningIcon/frame_13_delay-0.05s.png", //13
        "src/assets/images/FramesSpinningIcon/frame_14_delay-0.05s.png", //14
    ];

    let i = 0;

    function contar() {
        if (!playing) {
            return;
        }
        // Update the image source to the current frame
        document.querySelector("link[rel='icon']").href = spinningIconFrames[i];
        if (i >= spinningIconFrames.length) {
            i = 0;
        }
        setTimeout(contar, 1);
    }

    contar();
}

export default SpinningIcon;