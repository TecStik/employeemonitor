import React, { useState, useEffect, useContext } from "react";
import "./Dashboard.css";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  ForkOutlined,
  RedEnvelopeOutlined,
  LoginOutlined,
  FileOutlined,
  TeamOutlined,
  FormOutlined,
  DiffOutlined,
  UserAddOutlined,
  DollarCircleOutlined,
  UserOutlined,
  DingtalkOutlined,
  UsergroupAddOutlined,
  BranchesOutlined,
  TransactionOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AttendanceTable } from "./Pages/pages";

export default function Dashboard() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [trigger, setTrigger] = useState(1);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  let Role = "SuperAdmin";

  var a = [
    {
      Cashier: "Cashier",
      Admin: "Admin",
      key: "7",
      icon: <UsergroupAddOutlined onClick={() => setTrigger(7)} />,
      label: (
        <div onClick={() => setTrigger(7)}>
          <span style={{ marginLeft: "5%" }}>
            {" "}
            {!collapsed ? "All Data Members" : ""}
          </span>
        </div>
      ),
    },
  ];

  var itemChild = a.filter((num) => {
    if (Role === "SuperAdmin") {
      return num;
    } else if (Role === "Admin") {
      return num.Admin;
    } else if (Role == "Cashier") {
      return num.Cashier;
    }
  });
  var b = itemChild;

  var item = [
    {
      Cashier: "Cashier",
      Admin: "Admin",
      key: "1",
      icon: <HomeOutlined onClick={() => setTrigger(1)} />,
      label: (
        <div onClick={() => setTrigger(1)}>
          <span style={{ marginLeft: "5%" }}> {!collapsed ? " Home" : ""}</span>
        </div>
      ),
    },

    {
      Cashier: "Cashier",
      // Admin: 'Admin',
      key: "2",
      icon: <FormOutlined onClick={() => setTrigger(2)} />,
      label: (
        <div onClick={() => setTrigger(2)}>
          {" "}
          <span style={{ marginLeft: "5%" }}> {!collapsed ? "Task" : ""}</span>
        </div>
      ),
    },
    // Role =="SuperAdmin"?<></>:

    {
      key: "5",
      icon: <FileOutlined onClick={() => setTrigger(5)} />,
      label: (
        <div onClick={() => setTrigger(5)}>
          <span style={{ marginLeft: "5%" }}> {!collapsed ? "Files" : ""}</span>
        </div>
      ),
    },

    // {
    //     // Cashier: "Cashier",
    //     Admin: 'Admin',
    //     key: '14',
    //     icon: <DiffOutlined onClick={() => setTrigger(13)} />,
    //     label: <div onClick={() => setTrigger(13)}><span style={{ marginLeft: '5%' }}> {!collapsed ? 'Reporting' : ''}</span></div>,

    // },
    // {
    //     Cashier: "Cashier",
    //     // Admin: 'Admin',
    //     key: '11',
    //     icon: <RedEnvelopeOutlined onClick={() => setTrigger(13)} />,
    //     label: <div onClick={() => setTrigger(13)}><span style={{ marginLeft: '5%' }}> {!collapsed ? 'Deposit' : ''}</span></div>,

    // },
    // {
    //     Cashier: "Cashier",
    //     Admin: 'Admin',
    //     key: '15',
    //     icon: <DatabaseOutlined onClick={() => setTrigger(13)} />,
    //     label: <div onClick={() => setTrigger(13)}><span style={{ marginLeft: '5%' }}> {!collapsed ? 'Update Profile' : ''}</span></div>,

    // },

    // Role == "Cashier" ? (
    //   <></>
    // ) : (
    //   getItem("Meamber List", "sub4", <TeamOutlined />, itemChild, b)
    // ),

    {
      Admin: "Admin",
      key: "",
      icon: <LoginOutlined onClick={() => logout()} />,
      label: (
        <div onClick={() => logout()}>
          <span style={{ marginLeft: "5%" }}>
            {" "}
            {!collapsed ? " Log Out" : ""}
          </span>
        </div>
      ),
    },
  ];

  function getItem(label, Admin, icon, children, Cashier, key) {
    return {
      key,
      icon,
      label,
      Admin,
      Cashier,
      children,
    };
  }

  var items = item.filter((num) => {
    if (Role === "SuperAdmin") {
      return num;
    } else if (Role === "Admin") {
      return num.Admin;
    } else if (Role === "Cashier") {
      return num.Cashier;
    }
  });

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"></div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, fontSize: 30 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          {/* {`${Role} Dashboard`} */}
          monitoring app
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "80vh",
          }}
        >
          {trigger === 1 ? (
            <>
              <AttendanceTable />
            </>
          ) : (
            //  : trigger === 2 ? (
            //   <>
            //     <ClientForm />
            //   </>
            // ) : trigger === 3 ? (
            //   <>
            //     <ClientData />
            //   </>
            // ) : trigger === 4 ? (
            //   <>
            //     <PaymentData />
            //   </>
            // ) : trigger === 5 ? (
            //   <>
            //     <CsvfileUpload />
            //   </>
            // ) : trigger === 6 ? (
            //   <>
            //     <AddMember />
            //   </>
            // ) : trigger === 7 ? (
            //   <>
            //     <MembarList />
            //   </>
            // ) : trigger === 8 ? (
            //   <>
            //     <Admin />
            //   </>
            // ) : trigger === 9 ? (
            //   <>
            //     <Cashers />
            //   </>
            // ) : trigger === 10 ? (
            //   <>
            //     <Riders />
            //   </>
            // ) : trigger === 11 ? (
            //   <>
            //     <AysnRider />
            //   </>
            // ) : trigger === 12 ? (
            //   <>
            //     <TransactionList />
            //   </>
            // ) : trigger === 13 ? (
            //   <>
            //     <Quota />
            //   </>
            // ) : trigger === 16 ? (
            //   <>
            //     <AysnRider />
            //   </>
            // ) : trigger === 17 ? (
            //   <>
            //     <CashierDashboard />
            //   </>
            // ) : trigger === 18 ? (
            //   <>
            //     <AdminDashboard />
            //   </>
            // ) : trigger === 19 ? (
            //   <>
            //     <SMSleger />
            //   </>
            // )
            <>Page Not Found</>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

// export default () => <Dashboard />;
