import { FC } from 'react';
import { GalleryImage, SectionSeparator } from '~/uikit';
// import { IGalleryImage } from '~/types';
import { ISectionCase } from '~/data';
import s from './SectionCase.module.scss';

export interface ISectionCaseProps {
  sectionCaseData: ISectionCase;
  index: number;
}

export const SectionCase: FC<ISectionCaseProps> = ({ sectionCaseData, index }) => (
  <div className={"mb-5"}>
    <div className="container">

      <SectionSeparator/>

      <div className="row">
        <div className="col-md-4">
          <div className="mb-5">
            <div className={s.sectionCaseIndex}> {(index + 1).toString()} </div>
          </div>
        </div>
        <div className="col-md-20">
          <div className="mb-5">
            <div className={s.sectionCaseBadges}>
              {sectionCaseData.badges.map((badge, i) => (
                <div key={i} className={s.sectionCaseBadge}>{badge}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2 className={s.sectionCaseTitle}>{sectionCaseData.title}</h2>
          <p className={s.sectionCaseDescription}>{sectionCaseData.description}</p>
          <p className={s.sectionDescription2}>{sectionCaseData.description2}</p>
          <h4 className={s.sectionCaseSubTitle}>Problems Solved</h4>
          <ul className={s.sectionCaseList}>
            {sectionCaseData.problemsSolved.map((problem, i) => (
              <li key={i}>{problem}</li>
            ))}
          </ul>
          <h4 className={s.sectionCaseSubTitle}>Unique Features</h4>
          <ul className={s.sectionCaseList}>
            {sectionCaseData.uniqueFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <h4 className={s.sectionCaseSubTitle}>Interesting Cases</h4>
          <ul className={s.sectionCaseList}>
            {sectionCaseData.interestingCases.map((interestingCase, i) => (
              <li key={i}>{interestingCase}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-12">
          <GalleryImage
            noFrame={true}
            images={sectionCaseData.gallery}
            previewImage={sectionCaseData.gallery[0]}
          />
          <div className={s.sectionCaseQuoteBlock}>
            {sectionCaseData.quote}
          </div>
        </div>
      </div>

    </div>
  </div>
)
