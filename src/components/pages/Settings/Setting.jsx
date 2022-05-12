import { Sidebar } from '../../Sidebar/Sidebar'
import  './Setting.css'

export const Setting = () => {
  return (
    <div className='setting'>
        <div className='settingWrapper'>
            <div className="settingTitle">
                <span className="settingUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingDeleteTitle">
                    Delete Account
                </span>
            </div>

            <form className='settingForm'>
                <label htmlFor="">Profile Picture</label>
                <div className='settingpp'>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EADgQAAIBAwMBBwIEBAYDAQAAAAECAwAEEQUSITEGEyJBUWGBcZEUMqHRQrHB8AcVI2KC8VNy4TP/xAAYAQEBAQEBAAAAAAAAAAAAAAACAQADBP/EACERAAICAgICAwEAAAAAAAAAAAABAhESIQMxE1EyQWEi/9oADAMBAAIRAxEAPwD0LIAPkM4zim3egB9zz+lLHn1Prjmlj/77VDCGB0GKX603lnOB7t+9W7FQoknZQTH+UN6+tazEXcT7dwgfHXOw0oYJZ3KxISfPyxXb3sz3KJGW3uegPQUcEgVcfJPqaMZqQ5QcQWuk3BHLRL7ZP7VxJpVyB4djfQ/vRXvgT1p9/uKYAPFp7bC9w3dKDjBHJpG0DoXtX7zb1XGDRC9ja5gKxttfORxQeyuxGefCc4IPUH0NBypjUbRzkH0p+g6082DK5U+HccCowOf6UwHec+hz60+7Pn9+K5HH0p888VjC88jr60qWQenNKqQ4z7ZNLP8A1XOfoKcH5olFznJ4+angk2xPF0Dcj61D/eKbPOPyk9BWatFTplrSY/E9w48RO1fYVcmmKqcfauU2xRL6EcUN1mF9RsZrKCV4ZJ1MayIeVyOtcksVQ28nZYW6KjJPwal/zGCML38qR7jhS5wSfQe9Y/Utd03sVa2ml3ff6peLGC77ygAOcUUtotD7b6TDcJDPEsc24KXbh19fUf3xSRmtGpVs4IOaxfau9uIdcEGmwNLM0SySqi7tvXBx74/StLbzsHKSDDqSCPeszruqCx18tsLGZI4xsBJ6n0o8kv5OnDG5UU7TtLOq7rxFAHLDaVI+vpWhtLqO8gWeBgyN+nrWb7QaNqmoXwTuVQxgvHcrIAV9sZyc/ShHYrVntdXuNMuMgl9pB/hf9j+1SHI7pi5eJVaPQuMDzpgwPTIHnkUmZVALuAD056/Sm42g88+tdzyj5Hmc/NKketKsYiyM8kAe9PnA5z81xuDcr09qcY68fXFQx3uH9D7UxIKkEcHqK5GOMD7V0gZ3CoMsTwAaxi5FLut1TgFOMe3lUXeGOQuM7sED61dWxjhiLTMTJjr5LWe1a7/DxkzcRebqeg9TXKXZ1itFHtJoOn644mvVKTRpgMG2kgc/IzRjSYINNtI7KyjCW8S4UDy+fM+9Z5tYvbZO8iuLee3P8UyFSg92BANBpu0eo6hcdzO8SWsv/wCXdcCT2zkn+h96ii7G2qo3i3iXTNPEQyv0K8hqzF5fv/nVw20LGY9qSt0EgzxnyznHxVvTZe+tWRThRwdvFPPFFHA8ZVX3Lt2sM59qE/R049OyOCG4h/1pZggXJCDB3fOM15xr2ozW3ay5nRWQbgwdB9j/ACr0G30yZl2i7SOLAwndklf1orYdldLZZjc2wuJJ4zG7yHadrDBGf4cj05qQTs6cs1Quzurx6zpiXIQpJ+WSPGCG/Y9aJ5weOM1lv8kfsv2ightGfuLxgE8XDKD4lb3AO4H2x5mtVk/9V6YttHhmknobIpUiaVIJEAB+1IYzUjEeaH/k4Fcb0H/jH/MmjZaHVdxwoYseg9aNW1stnHufBlI5Pp7VW0iLezTELhfy4B6/NX5gCpJ644qNlSA+o321GycDpWS1eN7eYM52bkEh3HgZHNamG2/G35Lt/pQnkD+Jq61/Q4tVC+LY6gKDjPGc1yjdtna1qJ5hFbrf3DotqcdY2IAHAzn+dHbK2gkaONwd5I5Azg/H981phoAhhCrcDIA6p1rrTbaCyRYxhp8Hdu5zn0z1qxk1qQpqL3FnAsltotyhAxHiIHWg90ypex7ujZA+vpWsyGUJ3CMTwSSQoofednbK+KyPNMvdPkrG2P55PQms430GM67KOkSfiG3LG4UNjxpx68+1H2KQAyfh0LHpI7bh8df0qN5ba1tkjtgqooIVFP8AP96GyTPI/BZyegJz963xC3kyLtbK83ZyW6BCzWsiyI3zg/oT+lNoN5Le6VBNcY70jDEefoftircmnG7065imKf6sZHibGT5Y9Oag0vTodOt9gkjUsxYqG4Uk5wvtzTTeVkdY0XCDjPrSp8R9cs3/AKg0qdo50d936Qn5wKfa442IPq2aiYg9Y5mP+5sUu7SROSImHlkH71zGF7Z1t7cYAy3iOPOqV7fqiM3ibA/IgyWPoBU1jp0rbWuJmMY/Ko4z+wookEcYxGiqPYVsWzJpGe0WfwuJARITlgRjk0RkkAXOD96vS28cnLqCfI+dC51kt5dr4K9VJ9P3qNYoV5M477LYVTn0FQXCs4ztAHkT1q1+IcAAKDnoAPOrUenmTD3RPr3YPHzRq+i3iZyfVZbMFDskGOfHt+9BrvtYItqiEjvDtJ38Yr0hIo412xqqr6KMCsR/iN2UTUdPfUbAmC8tsyOI+kyAcgjzPmPpil437N5I+gS89/dr4SwifpJanLr74o1pmmzlFImnHq0gwv1wf6V5TqFhrWkWa31jftJGg3SJG3Ke5ot2V1DW9aILBmRfzSmVgP1zzU8bK+RP8PVoLMwse+gzJ/C4OUNOsUm3kkeuFAFAbNLyE7o5ZQy8kdDj+RFHmeLcQUd2HUheM0l1TOcvw5ZMdZSP+eP5Uq63H+C2PzimqkKwklHSFFHvzVqwt/xUpeaNBGnU46n0odcGaNsFmOPOiu4W9okWQCF3OfMmimWgmLpWJVOcdcUjc/7T1588VnJb9sYGMeQHFd2942ec4NVSM4GkEm5cihmsyBbKSQnBj8Q+9SWs2/nz/nWO7W6jdaiLmy091hhjYK85PLFTkhR6ZGMmtN6LBWzU6Ay3EbXR8R3FUHoBRdpNpxgk+grE/wCHMt0lpc21zJ3yxnesmMHk9DWnuZyq54FaDqJpp5Fprjb0FN+IDLhwecjaV60Ba6DN12j1z1qdLpcBS2Vz1PWqpBcTB9qYbjszf4stEt59NZco8Y8YHmMAeXzx1qtpGuaZaaYTbRusWfAiADHhyc+QAGPtW97QwJeaZucFnhcFQGwSDxnP6/FYPs/o8ljdy2zAxors8ZQ4OxznjHTjK/FdV0BkJ1aZnWXTZhI6SiSKRHyDzgq3r/fHr6E8rvkRSsgHky5NZy4srVbmK8SAJLGR4xwWXPQnz+a0SfiA3UN9RRkioSq+OWlb5wKVS9xOerY+lKjRbGmvNq4kRh9eKhvLnvnOG8PBHvkU0t4xO1l+1Dr6+t4HQu4Tf4fFxXOTHFEx610rYND5L6JR+dfvUMmqW6KWMyBR1JbAonQ01hcHdtHJoZcxWrSzlYgSzsTjODk5qjo+rw3twVs2MhTBLj8v386NhxAchUT6Cr2g9Mk0CNbe3mEcITcQeBjPWnvphkYPiPWo5LjZE7tNxjpmgK63ZXBIiu4nIOCN3I+K3So1W7CLMc7gfinEmFOaGnUoc4VgfpQ7Ve0NpYQM80oX0GeftU2I0Bu4rthZmZgzkABOpI5+3IoVqENzpGqWt1LdRPFODHKqnB3IGYYB6ZGfXpWE0ztcz67NdTt3Mfcd3D3mODnkk++au3uuQXW83CrI0kqMkqnlMHHX3GQfXNXOUXSHHihNWbf8THqFm01sV78HxW7N0Hsfpz/eKt6XI8sClUkUL4eeoxWEXUVtIJbmQt3cK5Ow+JvQD3PFH/8ADa+1O40WW4vIiS907IS3UHnjPkDkfFLjnKUdg5+OMJXH7NhEjz53TFceWOaVSyyiRAk0bp74pUqOJR3d4cEA1S1TSYNRgMU0e5T80qVChJ0ZG97E3SHFnPOY+m0uRiqtr2IkEm6fJ9uppUqlCs2OkaebKIRwQhAepxzV+a0mmH5m+9KlTSBkxLpkgTBNBtT7Gades0kkQWQ87gcc0qVTFFyYGn7GbPDHOSo8txFc23Y+2jffcxCRsHg80qVEX0CdQ7No19hYXWEnzSptQ0HT0gVLPTwrDrIoLHNKlUsaQQ7H6UQ0nfSM/HhV16VtrZJbcDa3HoMGlSrpBaOc229hBbmTb4lBHtxSpUqoD//Z" alt="" />
               <label htmlFor="fileInput">
               <i className="settingProfile fa-solid fa-user"></i>
               </label>
               
               <input type="file" id='fileInput' style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='ABC...'></input>
                <label>Email</label>
                <input type="text" placeholder='xyz@gmail.com'></input>
                <label>Password</label>
                <input type="password" placeholder='..........'></input>
                <button className='settingSubmit'>Update</button>
            </form>
        </div>
            <Sidebar></Sidebar>
    </div>
  )
}
