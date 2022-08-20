import {
  ModalContainer,
  ModalTitle,
  SafeButton,
  UnsafeButton,
} from 'components/Shared';
import { theme } from 'constants/theme';
import {
  DelettingCaptionContainer,
  DelettingContact,
  DelettingContactIcon,
  ButtonContainer,
} from './DeleteContactPrompt.styled';

const getNameOfDelettingTarget = (contacts, delettingID) => {
  let delettingName = null;

  for (const contact of contacts) {
    if (contact.id !== delettingID) continue;

    delettingName = contact.name;
    break;
  }

  return delettingName;
};

export const DeleteContactPrompt = ({
  contacts,
  delettingTarget,
  shouldShown,
  onContactDelete,
  onClose,
}) => {
  if (!delettingTarget) return;

  const delettingName = getNameOfDelettingTarget(
    contacts,
    delettingTarget.value
  );

  return (
    <ModalContainer shouldShown={shouldShown}>
      <ModalTitle>Are you sure?</ModalTitle>
      <DelettingCaptionContainer>
        <DelettingContactIcon size={theme.sizes.delettingContactIcon} />
        <DelettingContact>{delettingName}</DelettingContact>
      </DelettingCaptionContainer>
      <ButtonContainer>
        <UnsafeButton type="button" onClick={onContactDelete}>
          Delete
        </UnsafeButton>
        <SafeButton type="button" onClick={onClose}>
          Cancel
        </SafeButton>
      </ButtonContainer>
    </ModalContainer>
  );
};
