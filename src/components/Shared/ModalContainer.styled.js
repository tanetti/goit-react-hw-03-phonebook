import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: ${({ theme }) => theme.sizes.modalContainerMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.modalContainerMax};
  padding: ${({ theme }) => theme.space[5]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accentTransparent};
  border-radius: ${({ theme }) => theme.radii.generic};

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};
  visibility: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  pointer-events: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  transform: translate(-50%, -50%)
    scale(${({ shouldShown }) => (shouldShown ? 1 : 2)});

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.visibility},
    ${({ theme }) => theme.transitions.transform};
`;

export const ModalTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  text-transform: uppercase;
`;
