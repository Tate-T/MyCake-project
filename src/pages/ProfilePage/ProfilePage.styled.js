import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: "Verdana", sans-serif;
  color: #011936;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #dfdfdf;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #8e4a4e;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #011936;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Sidebar = styled.div`
  width: 20%;
  margin-right: 40px;
`;

export const SidebarItem = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  button {
    background-color: #fff2f2;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    color: #8e4a4e;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #fdad6d;
    }
  }
`;

export const ProfileDetails = styled.div`
  width: 80%;
`;

export const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    position: relative;

    span {
      color: #8e4a4e;
      cursor: pointer;
      margin-left: 10px;
      font-size: 14px;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #011936;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const ProgressBlock = styled.div`
  padding: 20px;
  background-color: #f2f7fc;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;

  p {
    margin-bottom: 10px;
    font-size: 16px;
    color: #011936;
  }

  button {
    padding: 10px 15px;
    background-color: #43607c;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #011936;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #dfdfdf;

  p {
    font-size: 14px;
    color: #8e4a4e;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;

    a {
      text-decoration: none;
      font-size: 14px;
      color: #011936;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;