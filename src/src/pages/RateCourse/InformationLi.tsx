const InformationLi = ({ header, info }: { header: string; info: string; }) => {
  return (<li className="grid grid-cols-2">
    {header}
    <p className="font-bold">{info}</p>
  </li>
  );
}

export default InformationLi;
