import styled from 'styled-components';
import {
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaSortNumericDown,
  FaSortNumericUpAlt,
  FaPhoneAlt,
  FaTimes,
  FaRegSadTear,
} from 'react-icons/fa';

export const ContactsTableBox = styled.div`
  min-width: ${({ theme }) => theme.sizes.contactsTableMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.contactsTableMax};
  margin-left: auto;
  margin-right: auto;

  border-radius: ${({ theme }) => theme.radii.generic};

  overflow: hidden;
`;

export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeadCell = styled.td`
  position: relative;

  padding: ${({ theme }) => theme.space[3]};

  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.mainAccent};

  &:not(:last-child) {
    border-right: ${({ theme }) => theme.borders.thin};
  }
`;

export const SortByNameButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.sizes.sortButton};

  color: ${({ theme, isSortFieldName }) =>
    isSortFieldName ? theme.colors.whiteText : theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.sortButtonBG};

  border-width: 0;

  cursor: pointer;

  outline-offset: -1px;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color};
`;

export const SotrByNameIconASC = styled(FaSortAlphaDown)`
  fill: currentColor;

  opacity: ${({ value }) => (value ? 1 : 0)};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${SortByNameButton}:hover &,
  ${SortByNameButton}:focus & {
    transform: scale(1.15);
  }
`;

export const SotrByNameIconDSC = styled(FaSortAlphaUpAlt)`
  position: absolute;

  fill: currentColor;

  opacity: ${({ value }) => (value ? 0 : 1)};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${SortByNameButton}:hover &,
  ${SortByNameButton}:focus & {
    transform: scale(1.15);
  }
`;

export const SortByNumberButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.sizes.sortButton};

  color: ${({ theme, isSortFieldNumber }) =>
    isSortFieldNumber ? theme.colors.whiteText : theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.sortButtonBG};

  border-width: 0;

  cursor: pointer;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};
`;

export const SotrByNumberIconASC = styled(FaSortNumericDown)`
  fill: currentColor;

  opacity: ${({ value }) => (value ? 1 : 0)};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${SortByNumberButton}:hover &,
  ${SortByNumberButton}:focus & {
    transform: scale(1.15);
  }
`;

export const SotrByNumberIconDSC = styled(FaSortNumericUpAlt)`
  position: absolute;

  fill: currentColor;

  opacity: ${({ value }) => (value ? 0 : 1)};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${SortByNumberButton}:hover &,
  ${SortByNumberButton}:focus & {
    transform: scale(1.15);
  }
`;

export const TableDataRow = styled.tr`
  background-color: ${({ theme, isLight }) =>
    isLight ? theme.colors.tableRowLight : theme.colors.tableRowDark};

  transition: ${({ theme }) => theme.transitions.backgroundColor};

  &:hover {
    background-color: ${({ theme, isLight }) =>
      isLight
        ? theme.colors.tableRowLightHovered
        : theme.colors.tableRowDarkHovered};
  }
`;

export const TableDataCell = styled.td`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.s};

  color: ${({ theme }) => theme.colors.darkText};

  &:first-child {
    width: ${({ theme }) => theme.sizes.callLink};
    padding: ${({ theme }) => theme.space[2]};
  }

  &:nth-child(2) {
    border-right: ${({ theme }) => theme.borders.thin};
  }

  &:nth-child(3) {
    text-align: right;
  }

  &:last-child {
    width: ${({ theme }) => theme.sizes.deleteButton};
    padding: ${({ theme }) => theme.space[2]};
  }
`;

export const NameDataContainer = styled.span`
  display: block;

  transition: ${({ theme }) => theme.transitions.contactDataBackwardTransform};

  transform: translateX(-30px);

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    transition: ${({ theme }) => theme.transitions.transform};

    transform: translateX(-15px);
  }
`;

export const NumberDataContainer = styled.span`
  display: block;

  transition: ${({ theme }) => theme.transitions.contactDataBackwardTransform};

  transform: translateX(30px);

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    transition: ${({ theme }) => theme.transitions.transform};

    transform: translateX(15px);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.deleteButton};
  height: ${({ theme }) => theme.sizes.deleteButton};

  color: ${({ theme }) => theme.colors.deleteButtonIcon};
  background-color: ${({ theme }) => theme.colors.deleteButtonBG};

  border-width: 0;

  cursor: pointer;

  outline-offset: -1px;
  opacity: 0;

  transform: scale(0.5);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    opacity: 1;

    transform: scale(1);

    transition: ${({ theme }) => theme.transitions.color},
      ${({ theme }) => theme.transitions.contactButtonsBackwardOpacity},
      ${({ theme }) => theme.transitions.contactDataBackwardTransform};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.deleteButtonIconHovered};

      transform: scale(1.2);

      transition: ${({ theme }) => theme.transitions.color},
        ${({ theme }) => theme.transitions.transform};
    }
  }
`;

export const DeleteIcon = styled(FaTimes)`
  fill: currentColor;
`;

export const CallLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ theme }) => theme.sizes.callLink};
  height: ${({ theme }) => theme.sizes.callLink};

  color: ${({ theme }) => theme.colors.callIcon};

  text-decoration: none;

  outline-offset: -1px;
  opacity: 0;

  transform: scale(0.5);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};

  ${TableDataRow}:hover &,
  ${TableDataRow}:focus-within & {
    opacity: 1;

    transform: scale(1);

    transition: ${({ theme }) => theme.transitions.color},
      ${({ theme }) => theme.transitions.contactButtonsBackwardOpacity},
      ${({ theme }) => theme.transitions.contactDataBackwardTransform};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.callLinkIconHovered};

      transform: scale(1.2);

      transition: ${({ theme }) => theme.transitions.color},
        ${({ theme }) => theme.transitions.transform};
    }
  }
`;

export const CallLinkIcon = styled(FaPhoneAlt)`
  fill: currentColor;
`;

export const TableDataCellEmpty = styled.td`
  padding: ${({ theme }) => theme.space[4]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  background-color: ${({ theme }) => theme.colors.tableRowLight};

  color: ${({ theme }) => theme.colors.darkText};
`;

export const CenteredSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultsIcon = styled(FaRegSadTear)`
  margin-left: ${({ theme }) => theme.space[3]};

  fill: currentColor;
`;
