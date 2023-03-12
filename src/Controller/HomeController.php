<?php

namespace App\Controller;

use App\Repository\QuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(QuestionRepository $questionRepository): Response
    {  
        //  https://randomuser.me/api/portraits/men/52.jpg'
        $questions = $questionRepository->findAll();

        return $this->render('home/index.html.twig', [
            'questions' => $questions
        ]);
    }
}
