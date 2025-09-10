import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant Manager (Technical)</h3>
            <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence Technology Centre (AITeC), National Centre for Physics (NCP)</h4>
            <ul>
              <li>Designed and deployed scalable AI solutions using deep learning, large language models, and generative techniques</li>
              <li>Worked across computer vision, NLP, and multimodal applications using modern AI toolkits</li>
              <li>Built interactive AI applications and workflows integrating LLMs, UI frameworks, and automation tools</li>
              <li>Design and scale AI pipelines using modern DevOps/MLOps tools for efficient data processing and retrieval</li>
              <li>Facilitated knowledge sharing through workshops and cross-team collaboration in AI projects</li>
            </ul>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer (Intern)</h3>
            <h4 className="vertical-timeline-element-subtitle">Shenzhen AiMall Technology Co. Ltd.</h4>
            <ul>
              <li>Developed image animation pipelines using Stable Diffusion with pose and audio drivers</li>
              <li>Utilized tools like ComfyUI, FaceAlignment, MediaPipe, and InsightFace to optimize workflows</li>
              <li>Integrated multi-modal AI (vision + audio) for dynamic animation tasks</li>
              <li>Contributed to research efforts and project progression toward publication</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance (Upwork)</h4>
            <ul>
              <li>Train and deploy deep learning models on custom datasets for real-world applications.</li>
              <li>Integrate and optimize AI models in API endpoints using FastAPI for seamless accessibility.</li>
              <li>Develop production-grade AI solutions, leveraging Celery, RabbitMQ, and other distributed processing tools.</li>
              <li>Work with clients across the USA, Japan, Malaysia, and other regions, delivering tailored AI solutions.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
