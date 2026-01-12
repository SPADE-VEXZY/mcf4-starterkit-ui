export const formatDashboardTitle = (pathname: string) => {
  const section = pathname.split("/").at(-1) ?? "";
  const isInSettings = pathname.split("/")[1] === "settings" ? "settings" : "";

  return {
    title: section
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    isInSettings,
  };
};
