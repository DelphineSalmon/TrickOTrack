import axios from 'axios';
import { API_ROUTES } from '../utils/constants';


function formatProject(projectArray) {
  return projectArray.map((project) => {
    const newProject = { ...project };
    // eslint-disable-next-line no-underscore-dangle
   // newProject.id = newProject._id;
    return newProject;
  });
}

export async function getProject() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJECT}`,
    });
    // eslint-disable-next-line array-callback-return
    const project = formatProject(response.data);
    return project;
  } catch (err) {
    console.error(err);
    return [];
  }

}
export async function getProjectById(id) {
  
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PROJECT}/${id}`,
    });
    // eslint-disable-next-line array-callback-return
    const project = response.data;
    return project;
  } catch (err) {
    console.log(`${API_ROUTES.PROJECT}/${id}`)
    console.error(err);
    return [];
  }

}