import { HomeIcon } from '@camp/design';
import { AppShell as Shell, MediaQuery } from '@mantine/core';
import { Outlet, useMatches, useMatchRoute } from '@tanstack/react-location';
import React, { useEffect, useState } from 'react';

import { CreateFamilyButton } from '../CreateFamilyButton';
import { CreateProjectModal } from '../CreateProject';
import { CreateProjectButton } from '../CreateProjectButton';
import { Header, SideBar } from '../organisms';
import { Breadcrumb } from './Breadcrumb';

export const AppShell = () => {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] =
    React.useState(false);
  const matchRoute = useMatchRoute();
  const matches = useMatches();
  const [path, setPath] = useState('');
  useEffect(
    () => setPath(matches[1]?.route?.meta?.['breadcrumb'] as string),
    [matches, path],
  );

  return (
    <Shell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <SideBar />
        </MediaQuery>
      }
    >
      <Header
        leftButton={
          // NOTE: Im not sure about this way, it's seems a bad way
          matchRoute({ to: '/projects' }) ? (
            <CreateProjectButton
              onClick={() => setIsCreateProjectModalOpen(true)}
            />
          ) : matchRoute({ to: '/families' }) ? (
            <CreateFamilyButton />
          ) : null
        }
        breadcrumbs={
          <Breadcrumb
            breadcrumbItems={[
              {
                icon: <HomeIcon width="25" height="25" />,
              },
              {
                pathname: path,
              },
            ]}
          />
        }
      />
      <Outlet />
      <CreateProjectModal
        opened={isCreateProjectModalOpen}
        onClose={() => setIsCreateProjectModalOpen(false)}
      />
    </Shell>
  );
};
