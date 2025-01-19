const InformationLi = ({ header, info }: { header: string; info: string; }) => {
  return (<li>
    {header}
    <p className="font-bold">{info}</p>
  </li>
  );
}

export default InformationLi;
