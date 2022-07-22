function togglePlatforms(platform){
    const windowsServices = document.querySelector('#windows-services')
    const macServices = document.querySelector('#mac-services')
    const linuxServices = document.querySelector('#linux-services')

    switch (platform){
        case 'linux':
            linuxServices.classList.remove('hidden')
            macServices.classList.add('hidden')
            windowsServices.classList.add('hidden')
            break
        case 'windows':
            windowsServices.classList.remove('hidden')
            macServices.classList.add('hidden')
            linuxServices.classList.add('hidden')
            break
        case 'mac':
            macServices.classList.remove('hidden')
            linuxServices.classList.add('hidden')
            windowsServices.classList.add('hidden')
            break
    }
}

