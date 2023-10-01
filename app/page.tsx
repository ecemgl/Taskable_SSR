import { IssueRow, SearchBar, Taskable } from '@/components'
import { Issue } from '@/types';
import { fetchIssues, fetchLabels } from '@/utils'

export default async function Home({searchParams}: any) {
  const allLabels = await  fetchLabels();
  
  var allLabelsName = []
  for(let i = 0; i<allLabels.length ; i++){
    allLabelsName.push(allLabels[i].name);
  }

  const allIssues = await fetchIssues({
    label: searchParams.label || '',
    author: searchParams.author || '',
    sort: searchParams.sort ||''
  });

  const isDataEmpty = !Array.isArray(allIssues) || allIssues.length < 1 || !allIssues ;
  var labelsArr = [];
  var authorsArr = [];

  //arr for the labels filter list
  for(let i =0 ; i< allIssues.length ; i++){
    for(let j = 0; j< allIssues[i].labels.length; j++){
      labelsArr.push(allIssues[i].labels[j].name)
    }
  }

  //arr for the authors filter list
  for(let i =0 ; i< allIssues.length ; i++){
      authorsArr.push(allIssues[i].user.login)
  }

  return (
    <main className="overflow-hidden">
      <Taskable />
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className='home__text-container'>
            <div className='home__filters'>
              <SearchBar options={allLabelsName}/>
            </div>
            {!isDataEmpty ? 
              <section className='w-[100%]'>
                 <div className='home__issues-table'>
                 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {allIssues.map((issue: Issue, index: number) => 
                <div key={index}>
                 <IssueRow key={index} issue={issue}/>
                </div>                
            )}
                  </div>
                 </div>
              </section>
              :
              <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>
                  Oops, no result... 
                </h2>
              </div>
            }
            <div>
            </div>
          </div>
        </div>  
    </main>
  )
}
