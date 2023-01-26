import React from "react";

export type CartProps = {
  total?: number;
  onRemove?: () => void;
};

const Card = ({ total, onRemove }: CartProps) => {
  return (
    <div>
      <div> {total} item di Keranjang </div>
      <button onClick={() => onRemove?.()}>Hapus dari keranjang</button>
    </div>
  );
};

export default Card;
