import React from 'react'
import {
    IconArrowDownRight,
    IconArrowUpRight,
    IconCoin,
    IconDiscount2,
    IconReceipt2,
    IconUserPlus,
  } from '@tabler/icons-react';
  import { Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
  import * as classes from './Stats.module.css';
  
  const icons:any = {
    user: IconUserPlus,
    discount: IconDiscount2,
    receipt: IconReceipt2,
    coin: IconCoin,
  };

  interface IProps {
    sheets: any
}
  
const SUM_NEEDED = 98000;
  
  export function Stats(props: IProps) {

    const PEOPLES_COUNT = Object.keys(props.sheets).length
    const PRICE_PER_USER = SUM_NEEDED / PEOPLES_COUNT
    let data:any = []
    for (const user in props.sheets) {
      const userData = props.sheets[user][0]
      data.push({ title: user, icon: 'receipt', value: String(userData.Money), diff:  Math.floor(userData.Money / PRICE_PER_USER * 100)},)
      
    }

    const stats = data.map((stat:any) => {
      const Icon = icons[stat.icon];
      const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
  
      return (
        <Paper withBorder p="xs" radius="md" key={stat.title}>
          <Group justify="space-between">
            <Text size="xs" c="dimmed" className={classes.title}>
              {stat.title}
            </Text>
            <Icon className={classes.icon} size={22} stroke={1.5} />
          </Group>
  
          <Group align="flex-end" gap="xs">
            <Text className={classes.value}>{stat.value}₽</Text>
            <Text c={stat.diff < 100 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
              <span>{stat.diff}%</span>
              <DiffIcon size={16} stroke={1.5} />
            </Text>
          </Group>
        </Paper>
      );
    });
    return (
      <div className={classes.root}>
        <SimpleGrid cols={2}>
       {stats}
          
        </SimpleGrid>
      </div>
    );
  }