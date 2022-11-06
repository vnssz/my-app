import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      url: "/"
    },
    {
      label: "New",
      icon: "pi pi-fw pi-pencil",
      url: "/create"
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      url:"/users",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
          url:"/profile"
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Form",
      icon: "pi pi-fw pi-user",
      items: [
         {
          label: "Register Form",
          icon: "pi pi-fw pi-user",
          url:"/form"
        },
        {
          label: "Department",
          icon: "pi pi-fw pi-building",
          url:"/department"
        },
        {
          label: "Region",
          icon: "pi pi-fw pi-map",
          url:"/region"
        },
      ],
    }
  ];

  return <Menubar model={items} />;
};

export default Navbar;