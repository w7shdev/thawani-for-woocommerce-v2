/**
 * Handles the requests that works with PHP and wordpress.
 * @example 
 *  await request({action : 'Wordpress action name'})
 * 
 * @param {Object} data object payload
 * @returns Promise<any> JSON response
 */
 export async function request(data){
    const formData = new FormData();

    for(const key in data){
        formData.append(key, data[key])
    }
    const response =  await window.fetch('./admin-ajax.php', {
        method: "post",
        body: formData
    });

    return response.json();
}