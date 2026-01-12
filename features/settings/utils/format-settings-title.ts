export const formatSettingsTitle = (pathname: string) => {
  const section = pathname.split("/")[2] ?? "settings";

  return section
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
