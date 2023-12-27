/* eslint-disable react/prop-types */
export default function Footer({items}) {
    if (items.length === 0) return <footer className="stats">The list is still empty.</footer>
      const totalItems = items.length;
      const checkedItems = items.filter((item) => item.checked).length;
      const percentage = Math.round(checkedItems / totalItems * 100);
    return <footer className="stats">{totalItems} total on the list, {checkedItems} checked. Item progress: ({percentage}%)</footer>
    }