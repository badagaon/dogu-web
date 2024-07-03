'use client';

import { Button, Container, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const ListCountdownTimers: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  // get timers this users with temporary user id
  
  // 리스트에는 타이머의 이름, 지정 시간을 표시하고 디테일, 삭제 버튼을 표시한다.
  // 디테일 버튼을 누르면 다이어로그로 타이머의 이름, 지정 시간, 작성 시간, 수정 시간을 표시하고, 저장, 취소 버튼을 표시한다.
  // 리스트에 특정 타이머를 클릭하면 바로 화면에 지정 타이머를 표시한다.
  return (
    <>
      <Container>
        <Stack direction='row' spacing={2}>
          <Typography variant="h6">
            Timer list
          </Typography>
          <Button endIcon={<AddIcon />}>
            Add
          </Button>
        </Stack>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="아침 루틴" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="점심 시간" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </>
  )
}

export default ListCountdownTimers;