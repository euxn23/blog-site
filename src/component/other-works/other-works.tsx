'use client'

import * as Accordion from '@radix-ui/react-accordion'
import data from '@/src/prebuilt.json'
import { OtherWork } from '@/src/component/other-work/other-work'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import './other-works.scss'
import { Fragment } from 'react'

export function OtherWorksOpen() {
  return (
    <div className="other-works open">
      <div className="title">Other Works</div>
      <div className="entries">
        {data.otherWorks.map((entry, index) => (
          <Fragment key={entry.url}>
            {index !== 0 && <hr className="line" />}
            <OtherWork {...entry} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export function OtherWorksAccordion() {
  return (
    <Accordion.Root className="other-works accordion" type="single" collapsible asChild>
      <Accordion.Item value="other-works">
        <Accordion.Trigger className="title">
          Other Works
          <ChevronDownIcon className="chevron" aria-hidden />
        </Accordion.Trigger>
        <Accordion.Content className="entries">
          {data.otherWorks.map((entry, index) => (
            <Fragment key={entry.url}>
              {index !== 0 && <hr className="line"/>}
              <OtherWork {...entry} />
            </Fragment>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export function OtherWorks() {
  return (
    <>
      <OtherWorksAccordion />
      <OtherWorksOpen />
    </>
  )
}
