const classNames = (...classes: (false | null | undefined | string)[]) =>  {
  return classes.filter(Boolean).join(" ");
}

export default classNames;