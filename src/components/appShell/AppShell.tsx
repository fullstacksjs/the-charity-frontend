import { AppShell as Shell, MediaQuery } from '@mantine/core';

import PeopleIcon from './icons/components/PeopleIcon';
import EmptyState from './molecules/EmptyState';
import Header from './organisms/Header';
import SideBar from './organisms/SideBar';

const AppShell = ({ content }: { content: React.ReactNode }) => {
  return (
    <>
      <Shell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SideBar />
          </MediaQuery>
        }
      >
        <Header />
        {content}
        <EmptyState
          icon={<PeopleIcon w="33" h="33" />}
          title="پروژه ای وجود ندارد!"
          message="متاسفانه لیست پروژه های شما خالی است. لطفا پروژه خود را ایجاد کنید."
        />
      </Shell>
    </>
  );
};

export default AppShell;
