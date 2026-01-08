import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  background: #020617;
  color: white;
  font-family: Bourgeois;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 220px;
  background: #020617;
  border-right: 1px solid #1e293b;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SidebarTitle = styled.h2`
  font-size: 14px;
  letter-spacing: 2px;
  color: #93c5fd;
  margin-bottom: 12px;
`;

export const SidebarButton = styled.button`
  background: #020617;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 10px;
  color: #93c5fd;
  cursor: pointer;

  &:hover {
    background: #020617;
    border-color: #60a5fa;
  }
`;

export const Main = styled.div`
  flex: 1;
  padding: 5px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 26px;
  letter-spacing: 2px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  letter-spacing: 2px;
  color: #93c5fd;
  text-transform: uppercase;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 160px;
  padding: 12px;
  background: #020617;
  border: 1px solid #334155;
  border-radius: 10px;
  color: white;
`;

export const Select = styled.select`
  padding: 12px;
  background: #020617;
  border: 1px solid #334155;
  border-radius: 10px;
  color: white;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ variant?: "secondary" }>`
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;

  background: ${({ variant }) =>
        variant === "secondary" ? "#020617" : "#2563eb"};
  color: ${({ variant }) =>
        variant === "secondary" ? "#93c5fd" : "white"};
  border: ${({ variant }) =>
        variant === "secondary" ? "1px solid #334155" : "none"};
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;

export const TeamCard = styled.div`
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TeamTitle = styled.h3`
  font-size: 14px;
  letter-spacing: 1px;
  color: #93c5fd;
`;

export const LogoPreview = styled.div`
  height: 120px;
  border: 1px dashed #334155;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  max-width: 90%;
  max-height: 90%;
`;


export const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PlayerRow = styled.div`
  display: flex;
  gap: 8px;
`;

export const AddPlayerButton = styled.button`
  margin-top: 8px;
  background: #020617;
  border: 1px dashed #334155;
  color: #93c5fd;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
