// controllers/sidebar_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["panel"]

  toggle() {
    this.panelTarget.classList.toggle("-translate-x-full")
    this.panelTarget.classList.toggle("md:-translate-x-0")
  }
}