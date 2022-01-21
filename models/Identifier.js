const mongoose = require("mongoose");
const CustomerSchema = require("./Customer").CustomerSchema;

const Identifier = mongoose.model(
    "Identifier",
    new mongoose.Schema({
        Device: {
            type: String,
            default: "2324"
        },
        initialPostion: {
            Xpos: {

                Xpos1: {
                    type: Number,
                    default: 0,
                },
                Xpos2: {
                    type: Number,
                    default: 0,
                },
                Xpos3: {
                    type: Number,
                    default: 0,
                },





            },
            Ypos: {

                Ypos1: {
                    type: Number,
                    default: 0,
                },
                Ypos2: {
                    type: Number,
                    default: 0,
                },
                Ypos2: {
                    type: Number,
                    default: 0,
                },




            }
        },
        pos: {
            X_cord: {
                X_cord1: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },
                X_cord2: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },
                X_cord3: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },

            },
            Y_cord: {
                Y_cord1: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },
                Y_cord2: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },
                Y_cord3: {
                    type: [],
                    default: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180]
                },
            },

            lenth_array :{
                len1:{
                    type:Number,
                    default:13
                },
                len2: {
                    type:Number,
                    default:13
                } ,
                len3: {
                    type:Number,
                    default:13,
                }
            }





        },

        Pattern_Name: {
            Pattern1: {
                type: String,
                default: "Pattern1",

            },
            Pattern2: {
                type: String,
                default: "Pattern2",

            },

            Pattern3: {
                type: String,
                default: "Pattern3",

            },

        },
        Schedule: {
            Schedule1: {
                Date: {
                    Year:{
                        type:String,
                        default:""
                   },
                   Month:{
                       type:String,
                       default:""
                   },
                   Day:{
                        type:String,
                        default:""
                   }
                },      

                Start_Time: {
                    type: String,
                    default: "",
                },
                End_Time: {
                    type: String,
                    default: "",
                },
                Sound: {
                    type: String,
                    default: "off"
                },
                Status: {
                    type: Boolean,
                    default: false
                },
                Day: {
                    type: [],
                    default: []
                },
                Enable: {
                    type: Boolean,
                    default: false
                }



            },


            Schedule2: {
                Date: {
                    Year:{
                        type:String,
                        default:""
                   },
                   Month:{
                       type:String,
                       default:""
                   },
                   Day:{
                        type:String,
                        default:""
                   }
                },

                Start_Time: {
                    type: String,
                    default: "",
                },
                End_Time: {
                    type: String,
                    default: "",
                },
                Sound: {
                    type: String,
                    default: "off"
                },
                Status: {
                    type: Boolean,
                    default: false
                },
                Day: {
                    type: [],
                    default: []
                },

                Enable: {
                    type: Boolean,
                    default: false
                }




            },

            Schedule3: {
                Date: {
                    Year:{
                        type:String,
                        default:""
                   },
                   Month:{
                       type:String,
                       default:""
                   },
                   Day:{
                        type:String,
                        default:""
                   }

                },

                Start_Time: {
                    type: String,
                    default: "",
                },
                End_Time: {
                    type: String,
                    default: "",
                },
                Sound: {
                    type: String,
                    default: "off"
                },
                Status: {
                    type: Boolean,
                    default: false
                },

                Day: {
                    type: [],
                    default: []
                },

                Enable: {
                    type: Boolean,
                    default: false
                }





            }
        },

        customer: CustomerSchema


    }));

module.exports = Identifier;
