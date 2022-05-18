export class App {
  msm = 'Hello World'
  dev = 'AutanaSoft'
  year = new Date().getFullYear()

  constructor() {
    this.init()
  }

  private init(): void {
    console.log(this.msm)
    console.log(`${this.dev} - ${this.year}`)
  }
}

new App()
