"use client"

import LearningTable from '@/components/LearningTable';
import UserProgress from '@/components/Progress';
import { CrownOutlined, FileProtectOutlined, HddOutlined} from '@ant-design/icons';
import { Button, Col, Flex, Rate, Row, Space, Typography } from 'antd';
import Card from 'antd/es/card/Card';

const {Title} = Typography

export default function Home() {
  return (
   <Row gutter={16}>
    <Col span={17}>
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Flex align='center' gap={16}>
            <div className='text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200 cursor-pointer'>
              <CrownOutlined />
            </div>
            <div>
              <Title level={4} style={{marginBottom: 0}}>
                24
                </Title>
              <Typography>Enrolled Courses</Typography>
            </div>
          </Flex>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Flex align='center' gap={16}>
            <div className='text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200 cursor-pointer'>
              <HddOutlined />
            </div>
            <div>
              <Title level={4} style={{marginBottom: 0}}>
                43
                </Title>
              <Typography>Lessons</Typography>
            </div>
          </Flex>
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Flex align='center' gap={16}>
            <div className='text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-indigo-200 cursor-pointer'>
              <FileProtectOutlined />
            </div>
            <div>
              <Title level={4} style={{marginBottom: 0}}>
                34
                </Title>
              <Typography>Certificate</Typography>
            </div>
          </Flex>
        </Card>
      </Col>
    </Row>
    <LearningTable/>
    </Col>
    <Col span={7}>
      <UserProgress/>
      <Title level={5}>Trend Course</Title>
      <Space direction='vertical' classNames="w-full">
        <Card>
          <Title level={5}>Typescript Basic</Title>
          <Rate disabled defaultValue={2} />
        </Card>
        <Card>
          <Title level={5}>Next Js Crash Course</Title>
          <Rate disabled defaultValue={4} />
        </Card>
      </Space>
    </Col>
   </Row>
  );
}
