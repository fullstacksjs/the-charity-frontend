import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/utils';
import { closeModal, openModal } from '@mantine/modals';

import { CreateProjectForm } from './CreateProjectForm';

export const createProjectModalId = 'create-project-modal';

export const CreateProjectModal = () => (
  <CreateProjectForm dismiss={() => closeModal(createProjectModalId)} />
);

export const openCreateProjectModal = () =>
  openModal({
    modalId: createProjectModalId,
    children: <CreateProjectModal />,
    title: messages.projects.create,
    size: 'md',
    centered: true,
    ...createTestAttr(createProjectModalId),
  });
