import React from "react";
import * as C from "./styles";
import swel from "sweetalert2";

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete, showModal }) => {
  const handleDelete = () => {
    onDelete(item.id);
    swel.fire({
      icon: "success",
      title: "Excluído com sucesso!",
      showConfirmButton: false,
      timer: 1700,
    });
    return;
  };

  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={handleDelete} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
