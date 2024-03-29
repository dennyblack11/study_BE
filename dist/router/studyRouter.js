"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studyController_1 = require("../controller/studyController");
const router = (0, express_1.Router)();
router.route("/create-study/:userID").post(studyController_1.createStudy);
router.route("/get-top-five").get(studyController_1.getTopFive);
router.route("/add-lesson-learnt/:studyID").post(studyController_1.addLessonLearnt);
router.route("/get-study/:studyID").get(studyController_1.getStudyByID);
router.route("/update-elapsed/:studyID").patch(studyController_1.updateTimeElapsed);
exports.default = router;
