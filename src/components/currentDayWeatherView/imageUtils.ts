export function getImageSource(description: string | undefined): number {
    if (description === "clear sky" || description === "clear") {
      return require("../../../assets/Images/sunnypng.png");
    } else if (description?.includes("clouds" || "overcast clouds")) {
      return require("../../../assets/Images/cloudy.png");
    } else if (description?.includes("rain" || "drizzle" || "thunderstorm")) {
      return require("../../../assets/Images/rainy.png");
    } else {
      return require("../../../assets/Images/sunnypng.png");
    }
  }
  