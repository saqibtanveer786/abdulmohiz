import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import SchoolIcon from '@mui/icons-material/SchoolTwoTone';
import WorkIcon from '@mui/icons-material/AssuredWorkloadTwoTone';
import StarIcon from '@mui/icons-material/StarTwoTone';

export default function Experience() {
  return (
    <VerticalTimeline lineColor={'#233150'}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">CNC Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Lahore, pakistan</h4>
        <p>3d Wood Modeling, 2d Designing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">CNC Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Abbottabad, pakistan
        </h4>
        <p>3d Wood Modeling, 2d Designing, Machine Operating</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Some Others</h3>
        <h4 className="vertical-timeline-element-subtitle">
          No Specific place
        </h4>
        <p>Word, Excel, PowerPoint etc</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
