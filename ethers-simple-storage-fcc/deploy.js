async function main() {
  console.log("hi");
  let variable = 5;
  console.log(variable);
}

main()
  .then(() => Process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
