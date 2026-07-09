function handleLink(
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  targetId: string,
) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

export default handleLink;
