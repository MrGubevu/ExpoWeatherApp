export function getBackgroundColor(description: string | undefined): string {
    if (description === "clear") {
      return "#4a90e2"; // Light Yellow
    } else if (description.includes("cloud")) {
      return "#54717a"; // Light Sky Blue
    } else if (description.includes("rain")) {
      return "#57575d"; // Steel Blue
    } else {
      return "#4a90e2"; // Light Yellow (default)
    }
  }

