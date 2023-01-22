import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("root") as HTMLElement;

  mount({
    mountPoint: localRoot,
  });
});

export {};
