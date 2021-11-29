import React from 'react'

export default function Index({ title, small }: any) {
  return (
    <div className="header-page" style={styles.header}>
      <div className="container-xxl">
        <div className="content" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="column-6 col-12">
            <div className="content pd-t-6 pd-b-6 mg-t-6">
              <div className="page-resume-title">
                <h1
                  className="title-s-1 header-page-title"
                  style={{
                    fontSize: '2pc',
                    fontWeight: 600,
                    color: 'var(--color-white) !important'
                  }}
                >
                  {title}
                </h1>
              </div>
              <div className="page-resume-span mg-t-2">
                <span
                  className="title-s-1 mg-t-5 header-page-small"
                  style={{
                    color: 'var(--color-white) !important',
                    fontWeight: 500
                  }}
                >
                  {small}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles: any = {
  header: { backgroundColor: 'var(--theme-primary-color)' }
}
