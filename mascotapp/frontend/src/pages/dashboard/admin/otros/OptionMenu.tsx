import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SlOptionsVertical } from "react-icons/sl";

export default function OptionMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.target)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mx-[-1rem] w-1">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SlOptionsVertical />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        
        
        <MenuItem onClick={handleClose}>Ver Mascota</MenuItem> {/* //!http://localhost:5173/mascota/6627437aa28e2e678c554186 */}
        <MenuItem onClick={handleClose}>Ver Cuidador</MenuItem>{/*//! perfil/id  http://localhost:5173/cuidador/6625e3bde4945791da6af366 */}
        <MenuItem onClick={handleClose}>Ver Dueño</MenuItem>{/* //!http://localhost:5173/perfil-dueno/6627437aa28e2e678c554186 */}
      </Menu>
    </div>
  );
}
