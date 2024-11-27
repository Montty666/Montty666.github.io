import React from 'react'
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import { Box, Group, Paper, Progress, SimpleGrid, Text } from '@mantine/core';
import * as classes  from './Sum.module.css';

interface IProps {
    sheets: any
}

const SUM_NEEDED = 98000;
const ONE_PERSENT = 980


export function Sum(props: IProps) {
    let brought = 0
    for (const user in props.sheets) {
        brought = brought + props.sheets[user][0].Money
      }
    let left = SUM_NEEDED - brought
    const broughtPercents = Math.floor(brought / ONE_PERSENT)
    const data = [
        { label: 'Занесли', count: String(brought), part: broughtPercents, color: '#47d6ab' },
        { label: 'Осталось', count: String(left), part: 100 - broughtPercents, color: '#03141a' },
      ];
  const segments = data.map((segment) => (
    <Progress.Section value={segment.part} color={segment.color} key={segment.color}>
      {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
    </Progress.Section>
  ));

  const descriptions = data.map((stat) => (
    <Box key={stat.label} style={{ borderBottomColor: stat.color }} className={classes.stat}>
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {stat.label}
      </Text>

      <Group justify="space-between" align="flex-end" gap={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper withBorder p="md" radius="md" w={'100%'}>
      <Group justify="space-between">
        <Group align="flex-end" gap="xs">
          {/* <Text fz="xl" fw={700}>
            345,765
          </Text> */}
          <Text c="teal" className={classes.diff} fz="sm" fw={700}>
            Деньги.Коттедж.Шерегеш
          </Text>
        </Group>
        <IconDeviceAnalytics size={22} className={classes.icon} stroke={1.5} />
      </Group>

      <Text c="dimmed" fz="sm">
        Процент расчитывается от кол-ва человек
      </Text>

      <Progress.Root size={34} classNames={{ label: classes.progressLabel }} mt={40}>
        {segments}
      </Progress.Root>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}