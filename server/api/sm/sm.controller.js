const { sSocialMedia, gSocialMedia } = require("./sm.service")

module.exports={
    setSocialMedia:(req,res)=>{
        sSocialMedia()
    },
    getSocialMedia:(req,res)=>{
        gSocialMedia()
    }
}