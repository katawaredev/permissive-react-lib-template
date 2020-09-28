import { FC } from "react";

interface ProductionType {
  /** demo description */
  type?: string;
}

const Production: FC<ProductionType> = ({ type = "bundle" }) => (
  <div>This is a production {type}</div>
);

export default Production;
