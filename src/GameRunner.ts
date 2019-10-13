class GameRunner {
    private intervalId ?: number;
    private framesPerSecond: number;

    public constructor(framesPerSecond = 30) {
        this.framesPerSecond = framesPerSecond;
    }

    public start() {
        // TODO: replace by requestAnimationFrame()
        this.intervalId = window.setInterval(this.runFrame, 1000 / this.framesPerSecond);
    }

    public stop() {
        window.clearInterval(this.intervalId);
    }

    private runFrame() {
        
    }
}

export default new GameRunner();