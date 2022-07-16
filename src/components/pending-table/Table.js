import React, { useState, useMemo } from "react";
import SortIcon from "@mui/icons-material/Sort";
import CardLayout from "../card/CardLayout";
import CardHeader from "../card/CardHeader";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const CompanyTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.companies);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <CardLayout>
        <CardHeader>
            Pending Payment
        </CardHeader>
      <table className="mx-auto table-auto min-w-full">
        <thead className="border-b-2">
          <tr className="">
            <th className="flex flex-row font-normal px-2">
              <div className="w-full text-left">Company </div>
              <button
                onClick={() => requestSort("Company")}
                className={`${getClassNamesFor(
                  "Company"
                )}  items-center inline-block`}
              >
                <SortIcon
                  className="inline text-gray-700 hover:text-gray-900"
                  sx={{ fontSize: 20 }}
                />
              </button>
            </th>
            <th className="font-normal text-right px-2">
              Invoice No.
              <button
                onClick={() => requestSort("InvoiceNo")}
                className={getClassNamesFor("InvoiceNo")}
              >
                <SortIcon
                  className="inline text-gray-700 hover:text-gray-900"
                  sx={{ fontSize: 20 }}
                />
              </button>
            </th>
            <th className="font-normal text-right px-2">
              Date
              <button
                onClick={() => requestSort("Date")}
                className={getClassNamesFor("Date")}
              >
                <SortIcon
                  className="inline text-gray-700 hover:text-gray-900"
                  sx={{ fontSize: 20 }}
                />
              </button>
            </th>
            <th className="font-normal text-left px-2">
              Status
              <button
                onClick={() => requestSort("Status")}
                className={getClassNamesFor("Status")}
              >
                <SortIcon
                  className="inline text-gray-700 hover:text-gray-900"
                  sx={{ fontSize: 20 }}
                />
              </button>
            </th>
            <th className="font-normal text-center px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((data) => (
            <tr
              className={`${
                data.Status === "Pending" ? "text-red-900 font-bold" : null
              }`}
            >
              <td className="text-left px-2">{data.Company}</td>
              <td className="text-right px-2">{data.InvoiceNo}</td>
              <td className="text-right px-2">{data.Date}</td>
              <td className="text-left px-2">{data.Status}</td>
              <td className="text-center px-2">
                <button className="rounded-md text-black font-normal border border-gray-300 hover:border-gray-900 align-center px-2 py-1 my-1">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardLayout>
  );
};

export default function Body() {
  return (
    <>
      <CompanyTable
        companies={[
          {
            InvoiceNo: 1,
            Date: "05/07/2022",
            Company: "Choice Daily",
            Status: "Pending",
          },
          {
            InvoiceNo: 2,
            Date: "06/07/2022",
            Company: "Emart",
            Status: "Paid",
          },
          {
            InvoiceNo: 5,
            Date: "12/05/2022",
            Company: "Choice Daily",
            Status: "Paid",
          },
          {
            InvoiceNo: 3,
            Date: "07/07/2022",
            Company: "H&L",
            Status: "Paid",
          },
          {
            InvoiceNo: 4,
            Date: "08/07/2022",
            Company: "H&L",
            Status: "Pending",
          },
        ].sort((a, b) => (a.Status === "Pending" ? -1 : 1))}
      />
    </>
  );
}
