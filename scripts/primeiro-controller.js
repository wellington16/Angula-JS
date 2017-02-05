angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter){
	$scope.nome = 'Wellington Luiz';
	var nome = "Lá Lá Lá";
	
	$scope.iniciado = true;
	
	$scope.alunos = [{'nome': 'Joãozinho', 'idade': 9},
                 {'nome': 'Ricardinho', 'idade': 11},
                 {'nome': 'Felipinho', 'idade': 11},
                 {'nome': 'Zildinha', 'idade': 14},
                 {'nome': 'Marianinha', 'idade': 10},
                 {'nome': 'Luluzinha', 'idade': 12}];
				 	
	$scope.hoje = new Date();
	
	$scope.finalizar = function(){
		$scope.iniciado = false;
	};
	
	$scope.iniciar = function() {
		$scope.iniciado = true;
	};
	
	$scope.ordenarPorNome = function(){
		$scope.ordenarPorNome = !$scope.ordenarPorNome;
		$scope.alunos = $filter('orderBy')($scope.alunos,'nome',$scope.ordenarPorNome);
	}
	
	$scope.ordenarPorIdade = function(){
		$scope.ordenarPorIdade = !$scope.ordenarPorIdade;
		$scope.alunos = $filter('orderBy')($scope.alunos,'idade',$scope.ordenarPorIdade)
	}
	
	$scope.submeter = function() {
		if($scope.form_1.$valid) {
			novo_aluno = {};
			novo_aluno['nome'] = $scope.nome_aluno;
			novo_aluno['idade'] = parseInt($scope.idade_aluno);
			$scope.alunos.push(novo_aluno);
		} else {
			alert("Preencha o formulário corretamente");
		}
	};
	
	/*$scope.remove = function(){
		if ($scope.alunos.length > 0){
			$scope.alunos.pop();
		}else{
			alert('Não é possível remover o elemento!');
		}
	};*/
});