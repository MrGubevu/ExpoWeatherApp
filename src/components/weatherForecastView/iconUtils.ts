export function getIconSource(description: string | undefined): string {
  if (description === "clear") {
    return "../../../assets/Icons/clear.png";
  } else if (description?.includes("cloud")) {
    return "../../../assets/Icons/partlysunny.png";
  } else if (description?.includes("rain")) {
    return "../../../assets/Icons/rain.png";
  } else {
    return "../../../assets/Icons/clear.png";
  }
}
